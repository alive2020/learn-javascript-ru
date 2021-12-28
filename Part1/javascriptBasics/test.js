/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSum(arr) {
    // Write your code here
    let pref = 0, sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let minInd = -1
    for (let i = 0; i < arr.length; i++) {
        if (pref == sum - pref - arr[i]) {
            if (minInd == -1 || arr[i] < arr[minInd]) {
                minInd = i;
            }
        }
        pref += arr[i]
    }
    return minInd;
}

//////////////////
/*
 * Complete the 'deviceNamesSystem' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY devicenames as parameter.
 */

function deviceNamesSystem(devicenames) {
    // Write your code here
    let m = {};
    let ans = [];
    for(let i = 0; i < devicenames.length; i++) {
        if(!(devicenames[i] in m))
            m[devicenames[i]] = 0;
        m[devicenames[i]]++;
        if(m[devicenames[i]] == 1){
            ans.push(devicenames[i]);
        }
        else {
            ans.push(devicenames[i] + (m[devicenames[i]] - 1));
        }
    }
    return ans;
}

//////////////////////////////
/*
 * Complete the 'segment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER_ARRAY space
 */

function segment(x, space) {
    // Write your code here
    let INF = 1000000009;
    let s1 = [[INF, INF]], s2 = [[INF, INF]];
    let mx = 0;
    for(let i = 0; i < x; ++i) {
        s1.push([space[i], Math.min(space[i], s1[s1.length - 1][1])]);
    }
    for(let i = x; i < space.length; ++i){
        
        mx = Math.max(Math.min(s1[s1.length - 1][1], s2[s2.length - 1][1]), mx);
        if(s2.length == 1) {
            for(let i = s1.length - 1; i > 0; --i) {
                s2.push([s1[i][0], Math.min(s1[i][0], s2[s2.length - 1][1])]);
            }
            s1 = [[INF, INF]];
        }
        s2.pop();
        s1.push([space[i], Math.min(space[i], s1[s1.length - 1][1])]);
        //console.log(i);
        //console.log(s1);
        //console.log(s2);
    }
    mx = Math.max(Math.min(s1[s1.length - 1][1], s2[s2.length - 1][1]), mx);
    
    return mx;
}