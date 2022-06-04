# nite-pagination

# Install

```
npm i @nite1984/nite-pagination
```

```
import NitePagination from '@nite1984/nite-pagination';

window.NitePagination = NitePagination;
```

# Usage

```
const nitePagination = new NitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
    maxPages: 10,
});
```

```
const nitePagination = new NitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
});

nitePagination.setMaxPages(10);
```