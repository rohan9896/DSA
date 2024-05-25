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

    public static boolean checkPalindromeHelper2(String str, int leftIndex, int rightIndex) {
        if(leftIndex > rightIndex) {
            return true;
        }

        return str.charAt(leftIndex) == str.charAt(rightIndex) && checkPalindromeHelper2(str, leftIndex + 1, rightIndex - 1);
    }

    public static boolean checkPalindrome(String str) {
        // return checkPalindromeHelper(str, 0, str.length() - 1, false);
        return checkPalindromeHelper2(str, 0, str.length());
    }

    public static void main(String[] args) {
        System.out.println(checkPalindrome("madam")); // true
        System.out.println(checkPalindrome("rohan")); // false
        System.out.println(checkPalindrome("naman")); // true

	}
}