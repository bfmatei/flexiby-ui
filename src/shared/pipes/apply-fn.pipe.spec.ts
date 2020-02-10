import { ApplyFnPipe } from './apply-fn.pipe';

describe('[Shared][Pipes] ApplyFn', () => {
  const applyFnPipe = new ApplyFnPipe();

  const functionToCall = (param1: {}, param2: string, param3: number) => {
    return {
      param1,
      param2,
      param3
    };
  };

  it('should call the function with specific params', () => {
    const param1 = {
      prop: 1
    };

    const param2 = '2';

    const param3 = 3;

    const result = applyFnPipe.transform(
      param1,
      functionToCall,
      param2,
      param3
    );

    expect(result).toEqual(functionToCall(param1, param2, param3));
  });
});
