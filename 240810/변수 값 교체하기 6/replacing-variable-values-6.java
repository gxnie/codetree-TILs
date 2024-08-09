public class Main {
    public static void main(String[] args) {
        int a = 2, b = 5, temp = 0;

        temp = a; // temp = 2;
        a = b;  // a = 5;
        b = temp; // b = 2;

        System.out.println(a);
        System.out.println(b);

    }
}