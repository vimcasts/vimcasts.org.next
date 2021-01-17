--- 
:title: Show invisibles
:date: 2010/01/04
:poster: /images/posters/show_invisibles.png
:flattr_id: "31755"
:duration: 172
:number: 1
:tags: Whitespace
---

Vim's `list` feature can be used to reveal hidden characters, such as tabstops and newlines. In this episode, I demonstrate how to customise the appearance of these characters by tweaking the `listchars` setting. I go on to show how to make these invisible characters blend in with your colortheme.


READMORE


Put the following in your `.vimrc` file:

```viml
" Shortcut to rapidly toggle `set list`
nmap <leader>l :set list!<CR>

" Use the same symbols as TextMate for tabstops and EOLs
set listchars=tab:▸\ ,eol:¬
```

If you like, you can customise other invisible characters besides tabs
and end-of-lines. For more information, run `:help listchars`.

You can customise the syntax highlighting colours of invisible characters with
the `NonText` and `SpecialKey` keywords. In [my prefered colourtheme][blackboard], I have added the following lines:

```viml
"Invisible character colors 
highlight NonText guifg=#4a4a59
highlight SpecialKey guifg=#4a4a59
```

Unicode characters can be inserted by typing `ctrl-vu` followed by the 4 digit hexadecimal code.

<table>
    <tr>
        <th>Symbol</th>
        <th>Unicode</th>
        <th>Name</th>
    </tr>
    <tr>
        <td class="large">¬</td>
        <td>U+00AC</td>
        <td>not sign</td>
    </tr>
    <tr>
        <td class="large">▸</td>
        <td>U+25B8</td>
        <td>black right-pointing small triangle</td>
    </tr>
    <tr>
        <td class="large">☠</td>
        <td>U+2620</td>
        <td>skull and crossbones</td>
    </tr>
    <tr>
        <td class="large">❤</td>
        <td>U+2764</td>
        <td>heavy black heart</td>
    </tr>
    <tr>
        <td class="large">‽</td>
        <td>U+203d</td>
        <td>interobang</td>
    </tr>
</table>


### Further reading

* [`:help 'list'`][list]
* [`:help listchars`][listchars]
* [`:help hl-NonText`][NonText]
* [`:help hl-SpecialKey`][SpecialKey]
* [`:help i_CTRL-V_digit`][unicode] - inserting special characters

[blackboard]: http://www.vim.org/scripts/script.php?script_id=2280
[list]: http://vimdoc.sourceforge.net/htmldoc/options.html#%27list%27
[listchars]: http://vimdoc.sourceforge.net/htmldoc/options.html#%27listchars%27
[NonText]: http://vimdoc.sourceforge.net/htmldoc/syntax.html#hl-NonText
[SpecialKey]: http://vimdoc.sourceforge.net/htmldoc/syntax.html#hl-SpecialKey
[unicode]: http://vimdoc.sourceforge.net/htmldoc/insert.html#i_CTRL-V_digit
[triangles]: http://en.wikipedia.org/wiki/Unicode_Geometric_Shapes

