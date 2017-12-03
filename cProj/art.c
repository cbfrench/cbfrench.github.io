#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define LENGTH 1024
#define GRID 30

char fills[] = {'.', '0', 'X', '-'};

int min(int a, int b){
    if(a < b){
        return a;
    }
    return b;
}

int max(int a, int b){
    if(a > b){
        return a;
    }
    return b;
}

void fillRect(int x, int y, int xlen, int ylen, char grid[GRID][GRID], int fill){
    int i, j;
    for(i = y + 1; i < y + ylen - 1 && i < GRID; i++){
        for(j = x + 1; j < x + xlen - 1 && j < GRID; j++){
            grid[j][i] = fills[min(fill-1, strlen(fills) - 2)];
        }
    }
}

void rectangle(int x, int y, int xlen, int ylen, char grid[GRID][GRID], int fill){
    int i;
    for(i = x; i < x + xlen && i < GRID; i++){
        grid[i][y] = fills[min(max(fill-1, 0), strlen(fills) - 2)];
        if(y + ylen - 1 < GRID){
            grid[i][y + ylen - 1] = fills[min(max(fill-1, 0), strlen(fills) - 2)];
        }
    }
    for(i = y; i < y + ylen && i < GRID; i++){
        grid[x][i] = fills[min(max(fill-1, 0), strlen(fills) - 2)];
        if(x + xlen - 1 < GRID){
            grid[x + xlen - 1][i] = fills[min(max(fill-1, 0), strlen(fills) - 2)];
        }
    }
    if(fill){
        fillRect(x, y, xlen, ylen, grid, fill);
    }
}

void square(int x, int y, int len, char grid[GRID][GRID], int fill){
    rectangle(x, y, len, len, grid, fill);
}

void printGrid(char grid[GRID][GRID]){
    int i, j;
    printf("\n");
    for(i = 0; i < GRID + 2; i++){
        printf("- ");
    }
    printf("\n");
    for(i = 0; i < GRID; i++){
        printf("| ");
        for(j = 0; j < GRID; j++){
            printf("%c ", grid[j][i]);
        }
        printf("|\n");
    }
    for(i = 0; i < GRID + 2; i++){
        printf("- ");
    }
    printf("\n");
}

void menu(char grid[GRID][GRID]){
    int input = 0;
    int x, y, xlen, ylen, fill, answer;
    printf("What would you like to do?\n");
    printf("Add rectangle - 1\n");
    printf("Add square ---- 2\n");
    printf("Print canvas -- 3\n");
    printf("Quit ---------- 4\n");
    scanf("%d", &input);
    if(input == 1){
        printf("X coordinate for top left corner: ");
        scanf("%d", &x);
        printf("Y coordinate for top left corner: ");
        scanf("%d", &y);
        printf("Width: ");
        scanf("%d", &xlen);
        printf("Height: ");
        scanf("%d", &ylen);
        printf("Fill: ");
        scanf("%d", &fill);
        rectangle(x, y, xlen, ylen, grid, fill);
    }
    if(input == 2){
        printf("X coordinate for top left corner: ");
        scanf("%d", &x);
        printf("Y coordinate for top left corner: ");
        scanf("%d", &y);
        printf("Side length: ");
        scanf("%d", &xlen);
        printf("Fill: ");
        scanf("%d", &fill);
        square(x, y, xlen, grid, fill);
    }
    if(input == 3){
        printGrid(grid);
        menu(grid);
    }
    if(input == 4){
        exit(EXIT_SUCCESS);
    }
    printGrid(grid);
    printf("Would you like to add another?\nYes - 1\nNo -- 2\n");
    scanf("%d", &answer);
    if(answer == 1){
        menu(grid);
    }
    else{
        exit(EXIT_SUCCESS);
    }
}

int main(int argc, char *argv[]){
    char grid[GRID][GRID] = {0};
    printf("%d\n", strlen(fills));
    printf("Welcome to my basic art generator\n");
    menu(grid);
    return 0;
}
