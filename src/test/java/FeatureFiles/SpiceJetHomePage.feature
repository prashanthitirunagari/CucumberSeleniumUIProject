Feature: One Way Flight Search 
 
 
     
  @SpiceJetSanity
  Scenario Outline: One Way Flight Search with Depart Date as current Date
  	Given User on Spicejet landing page
    When User selects "<direction>" radio button option 
    And User selects From city as "<fromCity>" and To city as "<toCity>"
    And User selects Depart date as current date
    And user select number of Passengers "<passengercount>"
    And user selects currency "<currency>"
    And User clicks on Search button
    Then the page which asks for GST details should display
    
    Examples:
    |direction	|fromCity|toCity|passengercount|currency|
    |oneway		|DEL	 |HYD	|1			   |GBP		|
    |twoway		|HYD	 |DEL	|2			   |GBP		|