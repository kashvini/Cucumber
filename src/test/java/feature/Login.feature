Feature: Login Feature

  Background: Open the login page
    Given User has navigated to the login page

  @Regression @Sanity
  Scenario: Positive Login Scenario
    When User enters correct username and password
    And User clicks on the login Button
    Then user should be navigated to the Home Page
  @Regression
  Scenario: Positive Login Scenario with Parameters
    When User enters correct username "abc@xyz.com" and password "Abc@1234"
    And User clicks on the login Button
    Then user should be navigated to the Home Page

  Scenario Outline: Positive Login Scenario with multiple users
    When User enters correct username "<UserName>" and password "<Password>"
    And User clicks on the login Button
    Then user should be navigated to the Home Page

    Examples: 
      | UserName    | Password |
      | abc@xyz.com | Acb@1236 |
      | pqs@xyz.com | Abc@1236 |

  Scenario Outline: Positive Login Scenario with multiple users
    When User enters correct username "<UserName>" and password "<Password>"
    And User clicks on the login Button
    Then user should be getting the error message "<Error>"

    Examples: 
      | UserName    | Password | Error                                              |
      | abc@xyz.com | Acb@1236 | The email or password you have entered is invaild. |
      | pqs@xyz.com | Abc@1236 | The email or password you have entered is invalid. |
   
   @DataTable
  Scenario: Positive Login Scenario withCucumber DataTable
    When User enters correct credentials
      | Field    | value        |
      | UserName | acb@@xyz.com |
      | Password | Acb@1236     |
    And User clicks on the login Button
    Then user should be navigated to the Home Page
