package com.puigthesong.app.repository;

import com.puigthesong.app.domain.Band;
import com.puigthesong.app.domain.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA repository for the Band entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BandRepository extends JpaRepository<Band, Long> {
    @Query("select distinct band from Band band left join fetch band.genres")
    List<Band> findAllWithEagerRelationships();

    @Query("select band from Band band left join fetch band.genres where band.id =:id")
    Band findOneWithEagerRelationships(@Param("id") Long id);

    /**
     * Buscar Banda por Nombre
     */
    List<Band> findBandByName(String nombreBanda);
    List<Band> findBandByNameContaining(String nombreBanda);

    /**
     * Buscar Banda por Artista
     */
    List<Band> findBandByArtistsName(String nombreArtista);
    List<Band> findBandByArtistsNameContaining(String nombreArtista);

    /**
     * Buscar Banda por Genero
     * */
    @Query("SELECT band FROM Band band where :genre member of band.genres")
    List<Band> findBandByGenres(@Param("genre") Genre genre);
}
