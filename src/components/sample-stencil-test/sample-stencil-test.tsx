import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sample-stencil-test',
  styleUrl: 'sample-stencil-test.css',
  shadow: true,
})
export class SampleStencilTest {
  @Prop() text: string;

  private getText(): string {
    return this.text;
  }

  render() {
    return <div>Sample Stencil Component: {this.getText()}</div>;
  }
}
