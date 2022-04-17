console.log("working");
 
/*function removeDuplicate(str,n){
    var index =0;
    for(var i=0; i<n;i++){
        var j;
        for(j=0;j<i;j++){
            if(str[i]==str[i]){
                break;
            }
        }
    }if(j==i){
        str[index++]==str[i];
    }

}
    str.join("").slice(str,index);
var str="abcadeecfb".split("");
var n=str.length;
console.log(removeDuplicate(str,n));*/



// JavaScript program to remove duplicate character
// from character array and print in sorted
// order
function removeDuplicate(str, n)
	{
		// Used as index in the modified string
		var index = 0;

		// Traverse through all characters
		for (var i = 0; i < n; i++)
		{

			// Check if str[i] is present before it
			var j;
			for (j = 0; j < i; j++)
			{
				if (str[i] == str[j])
				{
					break;
				}
			}

			// If not present, then add it to
			// result.
			if (j == i)
			{
				str[index++] = str[i];
			}
		}
		
		return str.join("").slice(str, index);
	}

	// Driver code
		var str = "abcadeecfb".split("");
		var n = str.length;
	console.log(removeDuplicate(str, n));

	
/*// This code is contributed by shivanisinghss2110


// A O(1) javascript program to
// find number of strings
// that can be made under
// given constraints.
	function countStr(n) {
		return 1 + (n * 2) + (n * ((n * n) - 1) / 2);
	}

	// Driver code
	
		var n = 3;
		document.write(countStr(n));

// This code is contributed by Princi Singh

*/

function countChars(text) {
    return text
      .split('')
      .reduce((map, char) => {
       return {
          ...map,
          [char] : (map[char] || 0) + 1
        };
    }, {});
  }
  console.log(countChars('abcadeecfb'));

  
  
