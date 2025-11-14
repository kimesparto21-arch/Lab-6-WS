import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Hello, " + name + "! You are " + age + " years old.");

        scanner.close();
    }
}








public class FibonacciSeries {
    public static void main(String[] args) {
        int n = 10; // Number of terms to display
        int a = 0, b = 1;

        System.out.print("Fibonacci Series (first " + n + " terms): ");
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int sum = a + b;
            a = b;
            b = sum;
        }
        System.out.println();
    }
}











public class ArrayOperations {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int sum = 0;

        for (int number : numbers) {
            sum += number;
        }

        double average = (double) sum / numbers.length;

        System.out.println("Sum of numbers: " + sum);
        System.out.println("Average of numbers: " + average);
    }
}





public class PalindromeChecker {
    public static void main(String[] args) {
        String original = "madam"; // Example string
        String reversed = new StringBuilder(original).reverse().toString();

        if (original.equalsIgnoreCase(reversed)) {
            System.out.println("'" + original + "' is a palindrome.");
        } else {
            System.out.println("'" + original + "' is not a palindrome.");
        }
    }
}





public class Rectangle {
    double length;
    double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double calculateArea() {
        return length * width;
    }

    public static void main(String[] args) {
        Rectangle rect = new Rectangle(5.0, 3.0);
        System.out.println("Area of the rectangle: " + rect.calculateArea());
    }
}








import java.util.ArrayList;
import java.util.List;

class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}

public class ProductStreamOperations {
    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Laptop", 1200.00));
        products.add(new Product("Mouse", 25.00));
        products.add(new Product("Keyboard", 75.00));
        products.add(new Product("Monitor", 300.00));
        products.add(new Product("Webcam", 50.00));

        // Count products with price greater than 100
        long expensiveProductCount = products.stream()
                                            .filter(p -> p.getPrice() > 100.00)
                                            .count();

        System.out.println("Number of products with price greater than $100: " + expensiveProductCount);
    }
}