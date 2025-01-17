import { Controller, GET, RequestBody, RequestParam, RequestQuery, POST } from '../core/RouterDecorator';

@Controller('/user')
export default class {

  private msg = 'This is the string of the test';

  @GET('/:id')
  public greet(
    @RequestParam('id') id: string,
    @RequestQuery('id2') id2: string,
    @RequestQuery('id') b: string,
    @RequestBody s: {}
  ) {
    console.log(id, id2, b, s, this.msg);
    return {
      name: 123, code: -1, msg: "213", list: [{ xx: 123, name: 123 }],
    };
  }
  @POST('/:id')
  public post(
    @RequestParam('id') id: string,
    @RequestQuery('id2') id2: string,
    @RequestQuery('id') b: string,
    @RequestBody s: {}
  ) {
    console.log(id, id2, b, s, this.msg);
    return this.msg;
  }
}