var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                count += 1
                helper(grid, i, j);
            }
        }
    }
    return count;
};

var helper = function (grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
        return;
    } else if (grid[i][j] === 1) {
        grid[i][j] = 0
        helper(grid, i + 1, j)
        helper(grid, i - 1, j)
        helper(grid, i, j + 1)
        helper(grid, i, j - 1)
    }

}