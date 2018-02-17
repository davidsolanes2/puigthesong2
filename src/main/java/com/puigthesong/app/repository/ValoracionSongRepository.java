package com.puigthesong.app.repository;

import com.puigthesong.app.domain.ValoracionSong;
import com.puigthesong.app.service.dto.ValoracionSongStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the ValoracionSong entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ValoracionSongRepository extends JpaRepository<ValoracionSong, Long> {

    @Query("select valoracion_song from ValoracionSong valoracion_song where valoracion_song.user.login = ?#{principal.username}")
    List<ValoracionSong> findByUserIsCurrentUser();

    @Query("select new com.puigthesong.app.service.dto.ValoracionSongStats(valoracionSong.song , " +
        "avg(valoracionSong.puntuacion), max(valoracionSong.puntuacion), min(valoracionSong.puntuacion)) " +
        "from ValoracionSong valoracionSong where valoracionSong.song.id = :songId")
    ValoracionSongStats findSongsStats(@Param("songId") Long Id);

}
