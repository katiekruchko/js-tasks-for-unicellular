## Условие

Задания описаны в файле `README.md` внутри папки с задачей.

## Решение

Каждое задание включает файл `app.js` с шаблоном функции, которую нужно реализовать.

Пример реализованного задания в `app.js`:

```javascript
function solution(a, b){
    return a + b;
}

exports.solution = solution
```

Всю необходимую логику нужно реализовать внутри функции `solution`. Результат вывести с помощью оператора `return`.

## Запуск тестов

Внутри папки с заданием нужно запустить следующую команду:

```node test.js```

### Успешный результат

```
Done
```

### Менее успешный результат

```
assert.js:337
    throw err;
    ^

AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(app.solution(1, 3) == 4)

    at Object.<anonymous> (/Users/dmitrytolkach/hello-projects/js-for-unicellular/task_001/test.js:4:1)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:266:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)
```

Строка `assert(app.solution(1, 3) == 4)` показывает какой тест не прошёл.

