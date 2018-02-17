package com.puigthesong.app.repository;

import com.puigthesong.app.domain.ValoracionAlbum;
import com.puigthesong.app.service.dto.ValoracionAlbumStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the ValoracionAlbum entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ValoracionAlbumRepository extends JpaRepository<ValoracionAlbum, Long> {

    @Query("select valoracion_album from ValoracionAlbum valoracion_album where valoracion_album.user.login = ?#{principal.username}")
    List<ValoracionAlbum> findByUserIsCurrentUser();
    @Query("select new com.puigthesong.app.service.dto.ValoracionAlbumStats(valoracionAlbum.album , " +
        "avg(valoracionAlbum.puntuacion), max(valoracionAlbum.puntuacion), min(valoracionAlbum.puntuacion)) " +
        "from ValoracionAlbum valoracionAlbum where valoracionAlbum.album.id = :albumId")
    ValoracionAlbumStats findAlbumsStats(@Param("albumId") Long Id);

}
