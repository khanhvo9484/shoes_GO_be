type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

interface ExceptionOptions {
  message: string;
  error: string;
  statusCode: number;
}
