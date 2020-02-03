var trie = require('trie-prefix-tree')

function print(object){
    console.log(object)
}

print('Hello World')
var myTrie = trie([
'cat', 'cats', 'dogs', 'elephant', 'tiger']);
print(myTrie.getWords());
myTrie.addWord('lion')
print(myTrie.getWords(false));
print(myTrie.getPrefix('c'));