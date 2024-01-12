const renderChoiceLayout = (container: Element) => {
  const choiceBox = container.querySelector('._cms_choice-box');
  if (!choiceBox) return;

  const choiceBoxWidth = choiceBox.getBoundingClientRect().width;
  choiceBox.classList.remove('strip');
  choiceBox.classList.remove('third');
  choiceBox.classList.remove('half');
  choiceBox.classList.remove('full');

  const maxChoiceWidth = Array.from(choiceBox.querySelectorAll('._cms_choice')).reduce((pre, choice) => {
    const width = choice.getBoundingClientRect().width;
    return pre > width ? pre : width;
  }, 0);

  if (maxChoiceWidth > (choiceBoxWidth / 100) * 50) {
    choiceBox.classList.add('full');
  } else if (maxChoiceWidth > (choiceBoxWidth / 100) * 33) {
    choiceBox.classList.add('half');
  } else if (maxChoiceWidth > (choiceBoxWidth / 100) * 25) {
    choiceBox.classList.add('third');
  } else if (maxChoiceWidth < (choiceBoxWidth / 100) * 20) {
    choiceBox.classList.add('strip');
  } else {
    choiceBox.classList.add('third');
  }
};

const resizeObserverCallbackForChoiceLayout: ResizeObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.target) renderChoiceLayout(entry.target);
  });
};

export { renderChoiceLayout, resizeObserverCallbackForChoiceLayout };
