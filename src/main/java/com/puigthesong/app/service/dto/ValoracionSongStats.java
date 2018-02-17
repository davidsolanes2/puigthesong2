package com.puigthesong.app.service.dto;

import com.puigthesong.app.domain.Song;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class ValoracionSongStats extends ValoracionStats {
    private Song song;


    public ValoracionSongStats(Song song, Double avg, Integer max, Integer min) {
        super(avg, max, min);
        this.song = song;
    }
}
