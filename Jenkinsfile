pipeline{
  agent any
  parameters {
        choice(name: 'Browser', choices: ['chrome', 'firefox'], description: 'Pick browser option')
	choice(name: 'TestingType', choices: ['SpiceJetSanity', 'JQuerySanity', 'MathsSanity'], description: 'Choose the tag to execute')
	choice(name: 'ApplicationURL', choices: ['https://www.spicejet.com/', 'https://jqueryui.com/', 'http://www.maths.surrey.ac.uk/explore/nigelspages/'], description: 'Select application to execute')
    }
  stages {
    stage('clean'){
      steps {
        echo 'Clean the application'
	bat "mvn clean"
        }
      }
   stage('test'){
     steps {
       echo 'test the application'
       bat "mvn install -Dcucumber.options=--tags '@SpiceJetSanity'"
       }
      }
    }
}