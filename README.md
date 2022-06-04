# nite-pagination

# Install

```
npm i @nite1984/nite-pagination
```

```
import nitePagination from '@nite1984/nite-pagination';

window.nitePagination = nitePagination;
```

# Usage

```
const pagination = nitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
    maxPages: 10,
});
```

```
const pagination = nitePagination({
    containerSelector: '#pagination',
    pageSelectCallback: (page) => {
        console.log(page);
    },
});

pagination.setMaxPages(10);
```