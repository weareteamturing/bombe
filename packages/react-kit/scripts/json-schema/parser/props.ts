import { Context, BaseType, SubNodeParser, NodeParser } from 'ts-json-schema-generator';
import ts from 'typescript';

export class MyConstructorParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}
  public supportsNode = (node: ts.Node): boolean => node.getText().endsWith('Props');
  public createType(node: ts.Node, context: Context): BaseType {
    return this.childNodeParser.createType(node, context);
  }
}
