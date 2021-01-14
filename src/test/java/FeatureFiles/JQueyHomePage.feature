Feature: Test to validate Menus in the JqueryUi home page 
  In order to validate that 
  the jqueryui page is working
  Doing the Acceptance Testing

  Background: 
	Given User access jqueryui "http://jqueryui.com" site
  
  @Sanity
  Scenario: Verification of the page title
    Then the page title should be "jQuery UI"
    
	
  @Sanity
  Scenario Outline: Validating existence of menus in Jqueryui home Page
    Then User should see list of "<menus>"
    
    Examples:
	|menus|
	|Demos|
	|Download|
	|API Documentation|
	|Themes|
	|Development|
	|Support|
	|Blog|
	|About|
	
  @Sanity
  Scenario Outline: Validating clicking on a menu navigate to respective menu details screen
    When User should clicks on "<menus>"
    Then menu screen "<headerName>" should display
    
    Examples:
	|menus				|headerName							|
	|Demos				|jQuery UI Demos					|
	|Download			|Download Builder					|
	|API Documentation	|jQuery UI 1.12 API Documentation	|
	|Themes				|ThemeRoller						|
	|Development		|Development Center					|
	|Support			|Support Center						|
	|About				|About jQuery UI					|