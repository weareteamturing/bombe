const writeText: (data: string) => Promise<boolean> = async (data) => {
  const isClipboardAvailable = navigator.clipboard !== undefined;

  if (!isClipboardAvailable) {
    return writeTextWithExec(data);
  }

  try {
    await navigator.clipboard.writeText(data);
    return true;
  } catch {
    return writeTextWithExec(data);
  }
};

/**
  use deprecated method, 'execCommand()'
  안드로이드 인앱브라우저 등 clipboard api writeText()가 작동하지 않을 때를 대응합니다
**/
const writeTextWithExec: (data: string) => Promise<boolean> = async (data) => {
  const isClipboardSuccess = await writeText(data);
  if (isClipboardSuccess) return true;

  try {
    const body = document.body;
    const input = document.createElement('input');
    input.style.opacity = '0';
    input.style.display = 'fixed';
    input.value = data;
    input.readOnly = true;

    body.appendChild(input);

    input.focus();
    input.select();
    const isSuccessExec = document.execCommand('copy');

    input.remove();

    return isSuccessExec;
  } catch {
    return false;
  }
};

export const clipboard = {
  writeText,
};
