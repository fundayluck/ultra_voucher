const groupAnagrams = (input) => {
    
    //sortString digunakan untuk mengurutkan karakter-karakter dalam sebuah string secara alfabetis.
    const sortString = (str) => {
        return str.split('').sort().join('')
    }
    
    // penampung kelompok kelompok anagram
    const anagrams = {};
    
    // digunakan untuk mengiterasi melalui setiap kata dalam array input. 
    // Untuk setiap kata, fungsi sortString dipanggil untuk mengurutkan huruf-hurufnya, 
    // dan hasilnya disimpan dalam variabel sorted.
    for (let i = 0; i < input.length; i++) {
        const sorted = sortString(input[i])
    
    // Kemudian, dilakukan pengecekan apakah sorted sudah ada sebagai kunci dalam objek anagrams. 
    // Jika sudah, maka kata yang sedang diiterasi (input[i]) akan dimasukkan ke dalam array 
    // yang sudah ada untuk kunci tersebut Jika belum, maka kunci baru akan dibuat dengan nilai
    // array yang berisi kata tersebut.
        if(anagrams[sorted]) {
            anagrams[sorted].push(input[i])
        } else {
            anagrams[sorted] = [input[i]]
        }
    }
    
    // Setelah semua kata dikelompokkan, dilakukan iterasi melalui setiap kunci dalam objek anagrams.
    // Setiap nilai (array kata-kata) dari setiap kunci dimasukkan ke dalam array result.
    const result = [];
    for(const key in anagrams){
        result.push(anagrams[key])
    }

    // hasil akhir dan tampilannya.
    return result;
}	
const soal =['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
const result = groupAnagrams(soal);
console.log(result);