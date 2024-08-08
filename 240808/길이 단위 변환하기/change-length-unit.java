public class Main {
    public static void main(String[] args) {
        // 1피트와 9.2피트 변수
        double a = 9.2;
        double b = 30.48;
        double ab = a * b;

        System.out.print(a + "ft" + " = ");
        System.out.printf("%.1fcm",ab);
        System.out.print("\n");

        // 1마일과 1.3마일 변수
        double c = 1.3;
        int d = 160934;
        double cd = (double)c * d;

        System.out.print(c + "mi" + " = ");
        System.out.printf("%.1fcm",cd);
    }
}