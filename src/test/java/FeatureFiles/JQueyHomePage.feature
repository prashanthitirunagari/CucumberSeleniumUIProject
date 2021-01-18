Feature: Test to validate Menus in the JqueryUi home page
  In order to validate that 
  the jqueryui page is working
  Doing the Acceptance Testing

  Background: 
    Given User is in the jQuery landing page

  @JQueryRegression
  Scenario Outline: Validating existence of menus in Jqueryui home Page
    Then User should see list of "<menus>"

    Examples: 
      | menus             |
      | Demos             |
      | Download          |
      | API Documentation |
      | Themes            |
      | Development       |
      | Support           |
      | Blog              |
      | About             |

  @JQuerySanity @JQueryRegression
  Scenario Outline: Validating clicking on a menu navigate to respective menu details screen
    When User should clicks on "<menus>"
    Then menu screen "<headerName>" should display

    Examples: 
      | menus             | headerName                       |
      | Demos             | jQuery UI Demos                  |
      | Download          | Download Builder                 |
      | API Documentation | jQuery UI 1.12 API Documentation |
      | Themes            | ThemeRoller                      |
      | Development       | Development Center               |
      | About             | About jQuery UI                  |

  @Image
  Scenario: Verify the JS Foundation Image on the Home Page
    Then Both the images should be same
