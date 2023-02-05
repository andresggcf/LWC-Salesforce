/*

*/

public with sharing class HRBestAndWorstRecords {
    public List<Integer> breakingRecords(List<Integer> scores){
        Integer min = -1;
        Integer max = -1;
        Integer breakMin = 0;
        Integer breakMax = 0;

        for(Integer i = 0; i < scores.size(); i++){
            Integer score = scores.get(i);
            if (i == 0){
                min = score;
                max = score;
            }
            else {
                if(score > max){
                    max = score;
                    breakMax += 1;
                }
                if(score < min){
                    min = score;
                    breakMin += 1;
                }

            }
        }

        System.debug('max min  = ' + breakMax + ',' + breakMin);
        return new List<Integer>{breakMax, breakMin};
    }

    public void inputHandler (String input){
        Integer n = Integer.valueOf(input.split(',').get(0));
        
        List<String> stringScores = input.split(',').get(1).split(' ');
        List<Integer> scores = new List<Integer>();

        for(Integer i = 1; i < stringScores.size(); i++){
            scores.add(Integer.valueOf(stringScores.get(i)));
        }
        
        List<Integer> results = breakingRecords(scores);
        
    }
}


//Example input: 
//'9, 10 5 20 20 4 5 2 25 1'