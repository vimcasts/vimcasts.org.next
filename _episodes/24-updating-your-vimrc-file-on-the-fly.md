--- 
:title: Updating your vimrc file on the fly
:date: 2010/07/18
:poster: /images/posters/vimrc_on_the_fly.png
:flattr_id: "37935"
:duration: 171
:number: 24
:tags: vimrc, autocommands
---

The vimrc file allows you to preserve your settings so that they are restored each time you launch Vim. But what if you want to update your vimrc file in the middle of an editing session? This episode demonstrates a couple of tricks that make it easy to customize Vim on the fly.

READMORE


###Sourcing the vimrc file

When you launch vim, it will automatically load and execute your vimrc file. If you modify the vimrc file whilst Vim is running you can apply those changes by running the command:

    :source $MYVIMRC

`$MYVIMRC` is a constant which should work whether you are running Vim on a unix system or on Windows.

I would like Vim to automatically source the vimrc each time I save it. This can be achieved with the following autocommand:

```viml
" Source the vimrc file after saving it
if has("autocmd")
  autocmd bufwritepost .vimrc source $MYVIMRC
endif
```


###Editing the vimrc file

You can always open the vimrc file by running the command:

    :edit $MYVIMRC

I like to make it as easy as possible to open my vimrc file, so I keep the following mapping in my vimrc:

```viml
let mapleader = ","
nmap <leader>v :tabedit $MYVIMRC<CR>
```

Pressing `,v` opens the vimrc file in a new tab.

Feel free to modify the mapping and the functionality to suit your preferences. You might want to experiment with replacing `tabedit` with `edit` (to open in the current window), or `split` (to open in a horizontal split), or `vsplit` (to open in a vertical split). 
