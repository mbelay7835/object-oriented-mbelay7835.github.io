"use strict";

// Fix a function that loses "this" using a wrapper method.

{
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: 'John',

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },

  };

  askPassword(() => user.loginOk(), () => user.loginFail());

}

// Fix a function that loses "this" using apply method.
{

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: 'John',

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },

  };

  askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

}

//Fix a function that loses "this" using call method.

{

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: 'John',

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },

  };

  askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

}