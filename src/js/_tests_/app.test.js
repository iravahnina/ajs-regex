import Validator from '../app';

test('Корректное имя', () => {
    const name = new Validator ('name');
    const received = name.validateUsername();
    expect(received).toBeTruthy();
});

test('Заглавные буквы', () => {
    const name = new Validator ('NAME');
    const received = name.validateUsername();
    expect(received).toBeTruthy();
});

test('Больше трех цифр подряд', () => {
    const name = new Validator ('na1234me');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
});

test('Меньше 4 цифр подряд ', () => {
    const name = new Validator('na123me');
    const received = username.validateUsername();
    expect(received).toBeTruthy();
});

test('Разный регистр ', () => {
    const name = new Validator('NaMe');
    const received = name.validateUsername();
    expect(received).toBeTruthy();
});

test('Имя начинается с подчеркивания', () => {
    const name = new Validator('_name');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
});

test('Имя начинается с цифры', () => {
    const name = new Validator('11name');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
});

test('Некорректное имя: пусто', () => {
    const name = new Validator('');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
});

test('Имя заканчивается тире', () => {
    const name = new Validator('name-');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
});

test('Имя начинается с тире', () => {
    const name = new Validator('-name');
    const received = name.validateUsername();
    expect(received).toBeFalsy();
  });
