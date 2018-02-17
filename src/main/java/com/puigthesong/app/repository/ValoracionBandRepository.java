package com.puigthesong.app.repository;

import com.puigthesong.app.domain.ValoracionArtist;
import com.puigthesong.app.domain.ValoracionBand;
import com.puigthesong.app.service.dto.ValoracionArtistStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data JPA repository for the ValoracionBand entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ValoracionBandRepository extends JpaRepository<ValoracionBand, Long> {

    @Query("select valoracion_artist from ValoracionArtist valoracion_artist where valoracion_artist.user.login = ?#{principal.username}")
    List<ValoracionArtist> findByUserIsCurrentUser();

    @Query("select new com.puigthesong.app.service.dto.ValoracionArtistStats(valoracionArtist.artist , " +
        "avg(valoracionArtist.puntuacion), max(valoracionArtist.puntuacion), min(valoracionArtist.puntuacion)) " +
        "from ValoracionArtist valoracionArtist where valoracionArtist.artist.id = :artistId")
    ValoracionArtistStats findArtistsStats(@Param("artistId") Long Id);
}
