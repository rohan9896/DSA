class CheckPalindrome {

    public static boolean checkPalindromeHelper(String str, int leftIndex, int rightIndex, boolean isPalindrome) {
        if(leftIndex > rightIndex) {
            return isPalindrome;
        }

        if(str.charAt(leftIndex) != str.charAt(rightIndex)) {
            isPalindrome = false;
            return isPalindrome;
        }

        return checkPalindromeHelper(str, leftIndex + 1, rightIndex - 1, true);

    }

    public static boolean checkPalindrome(String str) {
        return checkPalindromeHelper(str);
    }

    public static void main(String[] args) {
        System.out.println(checkPalindrome("madam")); // true
        System.out.println(checkPalindrome("rohan")); // false
        System.out.println(checkPalindrome("naman")); // true

	}
}