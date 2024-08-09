public class Main {
    public static void main(String[] args) {
        int a = 5, b = 6, c = 7, temp = 0;

        temp = b; // 6
        b = a; // 5
        a = c; // 7
        c = temp; // 6

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}