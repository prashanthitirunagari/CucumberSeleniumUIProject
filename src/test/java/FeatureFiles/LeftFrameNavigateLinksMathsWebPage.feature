Feature: Test to validate links in the left frame
  In order to validate that 
  the maths surrey page is working
  Doing the Acceptance Testing

  @MathsSanity
  Scenario Outline: Validate maths surrey Page
    Given I am on the nigels landing Page of maths Website
    When I click on the link "<linkname>"
    Then I should see list of "<header>" in the right frames
    And the page title should be HTML Learning Package

    Examples: 
      | linkname    | header           |
      | Contents    | Contents         |
      | Background  | HTML Background  |
      | Beg's Guide | Beginner's Guide |
      | HTML Tags   | HTML Tags        |
      | Tables      | Tables           |
