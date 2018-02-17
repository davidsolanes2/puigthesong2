package com.puigthesong.app.service.dto;

import com.puigthesong.app.domain.Band;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data

public class ValoracionBandStats extends ValoracionStats {

    private Band band;

    public ValoracionBandStats(Band band, Double avg, Integer max, Integer min) {
        super(avg, max, min);
        this.band = band;
    }
}
