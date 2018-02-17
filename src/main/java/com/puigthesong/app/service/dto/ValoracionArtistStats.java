package com.puigthesong.app.service.dto;

import com.puigthesong.app.domain.Artist;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

    public class ValoracionArtistStats extends ValoracionStats{


        private Artist artist;

        public ValoracionArtistStats(Artist artist, Double avg, Integer max, Integer min) {
            super(avg, max, min);
            this.artist = artist;
        }
    }
