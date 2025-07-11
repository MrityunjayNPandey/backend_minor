# CSV Processing Application

This application processes a CSV file containing a "big number" and up to 12 "small numbers" per row. For each row, it finds a combination of small numbers whose sum is as close as possible to the big number without exceeding it.

## Approach: Brute-Force Subset Sum

The core logic of this application employs a brute-force method to solve a variation of the subset sum problem. For each row in the CSV, it iterates through all possible combinations (subsets) of the provided small numbers. For each subset, it calculates the sum of its elements and compares it to the "big number" for that row. The combination that yields the sum closest to the big number without exceeding it is selected as the optimal solution.

### Advantages:

*   **Guaranteed Optimality:** For the given constraints, this approach guarantees that the absolute best combination of small numbers (closest sum without exceeding the big number) will always be found because it exhaustively checks every single possibility.
*   **Simplicity:** The logic is straightforward to understand and implement, especially for a limited number of elements.
*   **Efficiency for Small N:** Given that the problem specifies "up to 12" small numbers, the number of possible subsets (2^N) remains very small (2^12 = 4096). This makes the brute-force calculation extremely fast and computationally inexpensive for the specified input size.

### Limitations:

*   **Scalability (Exponential Complexity):** The primary limitation is the exponential time complexity (O(2^N)). As the number of small numbers (N) increases, the computation time grows dramatically. If N were to be significantly larger (e.g., 30 or more), this brute-force approach would become computationally infeasible and impractical due to the immense number of subsets to evaluate.
*   **Resource Intensive for Large N:** For larger N, not only would the computation time be an issue, but also the memory required to store or generate all possible subsets could become prohibitive.

For scenarios with a much larger number of small numbers, more advanced algorithms such as dynamic programming could be incorporated to optimize the process. However in that case, the memory requirement would still be prohibitive in case of large “big number”.