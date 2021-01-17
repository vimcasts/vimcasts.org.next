--- 
:title: How to use tabs
:date: 2010/03/08
:poster: /images/posters/how_to_use_tabs.png
:flattr_id: "31931"
:duration: 328
:number: 9
:tags: Managing your workspace
---

Vim's treatment of tabs is a little different than what you might be used to if you are coming from another editor. In this episode I demonstrate how Vim's tabs can be used to group split windows together. I also show how to use Vim's tabs like projects in TextMate, by setting a different working directory for each one.


READMORE


You can reveal the current directory with the command:

    :pwd

To change the working directory for the current tab, use the command:

    :cd

Note that both `:pwd` and `:cd` commands are native to Vim. You can call the equivalent commands for your shell by running `:!pwd` or `:!cd`.

###Further reading

* [`:help tabpage.txt`][tabpages]
* [`:help current-directory`][current]
* [Using vim's tabs like buffers][stack]


[tabpages]: http://vimdoc.sourceforge.net/htmldoc/tabpage.html
[current]: http://vimdoc.sourceforge.net/htmldoc/editing.html#current-directory
[stack]: http://stackoverflow.com/questions/102384/using-vims-tabs-like-buffers
