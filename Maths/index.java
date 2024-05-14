class Maths {

    public static int countDigitsHelper(int num, int count) {
        if(num == 0) {
            return count;
        }

        count++;
        return countDigitsHelper(num/10, count);
    }

    public static int countDigits(int num) {
        return countDigitsHelper(num, 0);
    }

    public static int reverseNumberHelper(int num, int reversedNum) {
        if(num == 0) {
            return reversedNum;
        }
        
        int lastDigit = num % 10;
        
        num = num / 10;
        
        reversedNum = (reversedNum * 10) + lastDigit;
        
        return reverseNumberHelper(num, reversedNum);
        
    }
    
    public static int reverseNumber(int num) {
        return reverseNumberHelper(num, 0);
    }
    
	public static void main(String[] args) {
		System.out.println(countDigits(1234));
        System.out.println(reverseNumber(1234));
	}
}

