#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

#ifdef _WIN32
#include <windows.h>
#define WAIT(x) Sleep(x)
#else
#include <sys/wait.h>
#define WAIT(x) wait(x)
#endif

typedef struct time{
    int h;
    int m;
    int s;
}Time;

Time createTime(){
    Time time;
    time.h = 0;
    time.m = 0;
    time.s = 0;
    return time;
}

int timeComp(Time a, Time b){
    if(a.h == b.h){
        if(a.m == b.m){
            if(a.s == b.s){
                return 1;
            }
        }
        return 0;
    }
    return 0;
}

void timer(Time *time, int *alarm){
    WAIT(1000);
    time->s += 1;
    if(time->s == 60){
        time->s = 0;
        time->m += 1;
        if(time->m == 60){
            time->m = 0;
            time->h += 1;
        }
    }
    if(*alarm == 0){
        printf("TIME: %02d:%02d:%02d\n", time->h, time->m, time->s);
    }
    else if(*alarm == 1){
        printf("BEEP\n");
        exit(EXIT_SUCCESS);
    }
    else{
        printf("BEEP ");
        *alarm -= 1;
    }
}

void setAlarm(Time *alarm){
    int h, m, s, c1, c2, c3;
    printf("Set an alarm: HOURS \n");
    c1 = scanf("%d", &h);
    printf("Set an alarm: MINUTES \n");
    c2 = scanf("%d", &m);
    printf("Set an alarm: SECONDS \n");
    c3 = scanf("%d", &s);
    if(c1 <= 0 || c2 <= 0 || c3 <= 0){
        printf("Error: incorrectly formatted time.\n");
        setAlarm(alarm);
    }
    alarm->h = h;
    alarm->m = m;
    alarm->s = s;
    printf("\n");
}

int main(int argc, char *argv[]){
    int a = 0;
    Time time = createTime();
    Time alarm = createTime();
    setAlarm(&alarm);  
    while(1){
        timer(&time, &a);
        if(timeComp(time, alarm)){
            a = 3;
        }
    }    
    return 0;
}
