$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters correct username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_correct_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has navigated to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_has_navigated_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login Scenario with Parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters correct username \"abc@xyz.com\" and password \"Abc@1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});