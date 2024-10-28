import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int out = sc.nextInt();

        for(int i = 1; i <= out; i++){
            int in = sc.nextInt();

            if( in % 3 == 0 && in % 2 == 1){
                System.out.println(in);
            }
        }
    }
}