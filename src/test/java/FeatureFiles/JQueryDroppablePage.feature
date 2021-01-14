Feature: Test to validate Drag & Drop with frames in Droppable Feature
  

  Background: 
	Given User access jqueryui "http://jqueryui.com" site
  
  @Sanity
  Scenario: Drag & Drop in a Frame
    When User should clicks on Droppable link
    And User switches to respective frame 
    And tries to move the drag me object to drop me object
    Then User should be should be successfully drag & drop the object
    
