import ErrorRepository from '../app';

test.each([
  [200, 'Ok'],
  [201, 'Created'],
  [202, 'Accepted'],
])('Получение по коду текста ошибки', (code, text) => {
  expect(new ErrorRepository().translate(code)).toBe(text);
});

test('В случае отсутствия кода ошибки должна возвращаться строка "Unknown error"', () => {
  expect(new ErrorRepository().translate(400)).toBe('Unknown error');
});
