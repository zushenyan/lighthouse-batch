import { schema } from './schema';

test('do not allow unknown properties', async () => {
  await expect(
    schema.validate({ foo: 'bar' }, { strict: true }),
  ).rejects.toThrow();
});
