Feature: HappyPathEndToEndFeature
  This feature deals with carrying out a search for news on bbc

  Scenario: Users searches news on bbc
    Given I navigate to "https://www.bbc.co.uk/" site
    And I select news
    Then I should see news page