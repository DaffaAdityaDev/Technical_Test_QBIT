var comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];
//TODO: 5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
//  balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.
// step 1 make new variable number
// step 2 loop array comments and increase number by 1
// step 3 if comments[i].replies is not empty 
// step 4 loop array comments[i].replies and increment number by 1
// step 5 if comments[i].replies[j].replies is not empty
// step 6 loop array comments[i].replies[j].replies and increment number by 1
// step 7 return number
var total_comment = function () {
    var total = 0; //membuat variable total
    for (var i = 0; i < comments.length; i++) { //mengloop setiap array comments
        total += 1;
        if (comments[i].replies) { //jika array comments[i].replies tidak kosong maka
            for (var j = 0; j < comments[i].replies.length; j++) { //mengloop setiap array comments[i].replies
                total += 1;
                if (comments[i].replies[j].replies) { //jika array comments[i].replies[j].replies tidak kosong maka
                    for (var k = 0; k < comments[i].replies[j].replies.length; k++) { //mengloop setiap array comments[i].replies[j].replies
                        total += 1;
                    }
                }
            }
        }
    }
    return total; //mengembalikan nilai
};
console.log(total_comment()); //menampilkan total komentar
