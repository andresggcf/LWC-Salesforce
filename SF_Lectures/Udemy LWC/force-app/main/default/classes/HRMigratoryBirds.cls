/*
    URL: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
*/

public with sharing class HRMigratoryBirds {

    public Integer migratoryBirds(List<Integer> idList){
        Integer maxId = -1;
        Integer maxCount = 0;
        Integer tempMax = 1;
        idList.sort();

        Integer id = idList.get(0);

        //list that stores ids that have the same max amount
        List<Integer> duplicateMax = new List<Integer>();

        for(Integer i = 1; i < idList.size(); i++){
            if (idList.get(i) == id){
                tempMax += 1;
            }

            if(idList.get(i) != id){
                if(tempMax > maxCount){
                    maxCount = tempMax;
                    maxId = idList.get(i-1);

                    id = idList.get(i);
                    tempMax = 1;

                    duplicateMax = new List<Integer>{maxId};
                }
                else if(tempMax == maxCount){
                    duplicateMax.add(idList.get(i-1));

                    id = idList.get(i);
                    tempMax = 1;
                }
            }
        }

        if(duplicateMax.size() > 0){
            duplicateMax.sort();
            return duplicateMax.get(0);
        } else {
            return maxId;
        }
    }
     
    public void inputHandler (String input){
        Integer n = Integer.valueOf(input.split(',').get(0));
        
        List<String> stringBirds = input.split(',').get(1).split(' ');
        List<Integer> birds = new List<Integer>();

        for(Integer i = 1; i < stringBirds.size(); i++){
            birds.add(Integer.valueOf(stringBirds.get(i)));
        }
        
        Integer result = migratoryBirds(birds);
        
    }
}


//Example input: 
//'6, 1 4 4 4 5 3'
//'11, 1 2 3 4 5 4 3 2 1 3 4'