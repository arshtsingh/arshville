// Gallery.js

import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import i1 from '../pics/01.jpeg';
import i2 from '../pics/02.jpeg';
import i3 from '../pics/03.jpeg';
import i4 from '../pics/04.jpeg';
import i5 from '../pics/05.jpeg';
import i6 from '../pics/06.jpeg';
import i7 from '../pics/07.jpeg';
import i8 from '../pics/08.jpeg';


const tileData = [
    {
        img: i1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i2,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i3,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i4,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i5,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i6,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: i7,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: i8,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
];

class Gallery extends Component {
    render() {
        return (
            <div>
                <GridList cellHeight={300} cols={6}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Gallery;


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
