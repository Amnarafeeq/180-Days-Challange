//  Delimiters:
//    /regex/  → regex ka start & end

//  Literal characters:
//    a-z, A-Z, 0-9 → normal letters & numbers

//  Meta characters:
//    .     → koi bhi 1 character  
//    ^     → start of string  
//    $     → end of string  
//    *     → 0 ya zyada baar  
//    +     → 1 ya zyada baar  
//    ?     → optional  
//    {}    → repeat (e.g. {2,4})  
//    []    → character set  
//    ()    → group  
//    |     → OR  
//    \     → escape special char

//  Character classes:
//    [a-z]  → small letters  
//    [A-Z]  → capital letters  
//    [0-9]  → numbers  
//    [^a]   → except 'a'  

//  Shortcuts:
//    \d   → digit (0-9)  
//    \D   → non-digit  
//    \w   → word (a-z, A-Z, 0-9, _)  
//    \W   → non-word  
//    \s   → whitespace  
//    \S   → non-whitespace  

//  Quantifiers:
//    a*     → 0 ya zyada 'a'  
//    a+     → 1 ya zyada 'a'  
//    a?     → 0 ya 1 baar  
//    a{3}   → exactly 3 times  
//    a{2,4} → 2 se 4 baar

//  Grouping & OR:
//    (ab)+  → "abab" match karega  
//    cat|dog → dono match ho sakte  

//  Anchors:
//    ^abc   → string "abc" se shuru  
//    xyz$   → string "xyz" pe end  

//  Lookahead/Lookbehind:
//    x(?=y)    → x ke baad y hona chahiye  
//    x(?!y)    → x ke baad y nahi hona chahiye  
//    (?<=y)x   → x ke pehle y hona chahiye  
//    (?<!y)x   → x ke pehle y nahi hona chahiye  

// //  Flags:
//    g → global (sab match)  
//    i → ignore case  
//    m → multiline  

// //  Example:
// let str = "My code is JS123";
// let match = str.match(/\w{2}\d{3}/);  // "JS123"
