package com.puigthesong.app.service.dto;

import com.puigthesong.app.domain.Album;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class ValoracionAlbumStats extends ValoracionStats {
    private Album album;

    public ValoracionAlbumStats(Album album, Double avg, Integer max, Integer min) {
        super(avg, max, min);
        this.album = album;
    }
}
